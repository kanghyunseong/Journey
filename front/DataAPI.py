import ssl
import requests
import pandas as pd
import math
import urllib3
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import logging
import os
from dotenv import load_dotenv

# 환경변수 로딩
load_dotenv()

# 로깅 설정
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger()

# SSL 경고 비활성화
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# API 키 및 기본 설정 (환경변수로부터 읽기)
api_key = os.getenv('API_KEY')  # 환경변수에서 API 키를 읽음
if not api_key:
    raise ValueError("API_KEY 환경 변수가 설정되지 않았습니다.")
base_url = 'https://apis.data.go.kr/B551011/KorService1/areaBasedList1'

# 세션 생성
session = requests.Session()

# SSLContext 설정 (TLS 1.2로 강제 설정)
context = ssl.create_default_context()
context.set_ciphers('ECDHE-RSA-AES128-GCM-SHA256')  # 강력한 암호화 설정
context.options |= ssl.OP_NO_SSLv2 | ssl.OP_NO_SSLv3  # SSLv2 및 SSLv3 사용 안 함

# PoolManager 생성 및 세션에 적용
http = urllib3.PoolManager(ssl_context=context)

# HTTPAdapter로 PoolManager 연결
adapter = HTTPAdapter(pool_connections=http)
session.mount('https://', adapter)

# 재시도 정책 설정
retries = Retry(total=5, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
session.mount("https://", HTTPAdapter(max_retries=retries))

# 수집할 데이터 리스트 초기화
all_data = []

# 지역 코드 및 카테고리 설정
regions = {
    '강릉': {'areaCode': 32, 'sigunguCode': 1},
    '속초': {'areaCode': 32, 'sigunguCode': 5}
}

# 카테고리 설정
categories = {
    '관광지': {
        '자연관광지': {'contentTypeId': 12, 'cat1': 'A01'},
        '인문관광지': {'contentTypeId': 12, 'cat1': 'A02'}
    },
    '문화시설': {
        '문화시설': {'contentTypeId': 14, 'cat1': 'A02'}
    },
    '축제공연행사': {
        '인문': {'contentTypeId': 15, 'cat1': 'A02'}
    },
    '여행코스': {
        '추천코스': {'contentTypeId': 25, 'cat1': 'C01'}
    },
    '레포츠': {
        '레포츠': {'contentTypeId': 28, 'cat1': 'A03'}
    },
    '숙박': {
        '숙박': {'contentTypeId': 32, 'cat1': 'B02'}
    },
    '쇼핑': {
        '쇼핑': {'contentTypeId': 38, 'cat1': 'A04'}
    },
    '음식': {
        '음식': {'contentTypeId': 39, 'cat1': 'A05'}
    }
}

# 각 지역과 카테고리에 대해 데이터 요청
for region, codes in regions.items():
    area_code = codes['areaCode']
    sigungu_code = codes['sigunguCode']

    for category_name, subcategories in categories.items():
        for subcategory_name, category_info in subcategories.items():
            content_type_id = category_info['contentTypeId']
            cat1 = category_info['cat1']

            params = {
                'numOfRows': 12,
                'pageNo': 1,
                'MobileOS': 'And',
                'MobileApp': 'AppTest',
                'ServiceKey': api_key,  # 환경변수에서 API 키를 사용
                'listYN': 'Y',
                'arrange': 'A',
                'contentTypeId': content_type_id,
                'areaCode': area_code,
                'sigunguCode': sigungu_code,
                'cat1': cat1,
                'cat2': '',
                'cat3': ''
            }

            try:
                logger.info(f"{region} - {category_name} - 첫 번째 페이지 요청 중...")

                # SSL 오류 무시하고 요청
                response = session.get(base_url, params=params, verify=False)

                if response.status_code == 200:
                    data = response.json()
                    if 'totalCount' in data:
                        total_count = data['totalCount']
                        total_pages = math.ceil(total_count / 12)
                        logger.info(f"{region} - {category_name} - 총 {total_pages} 페이지, 데이터를 수집합니다.")

                        for page in range(1, total_pages + 1):
                            params['pageNo'] = page
                            logger.info(f"{region} - {category_name} - 페이지 {page}/{total_pages} 요청 중...")

                            # SSL 오류 무시하고 요청
                            response = session.get(base_url, params=params, verify=False)

                            if response.status_code == 200:
                                data = response.json()
                                if 'result' in data:
                                    for item in data['result']:
                                        item['region'] = region
                                        item['category'] = category_name
                                        item['subcategory'] = subcategory_name
                                        item['imageURL'] = item.get('firstimage', '')
                                        all_data.append(item)
                            else:
                                logger.error(f"{region} - {category_name} - 페이지 {page} 오류: {response.status_code}")
                    else:
                        logger.warning(f"{region} - {category_name} - 결과 없음")
                else:
                    logger.error(f"{region} - {category_name} - 첫 번째 페이지 오류: {response.status_code}")
            except requests.exceptions.SSLError as e:
                logger.error(f"SSL 오류 발생: {e}")
            except Exception as e:
                logger.error(f"오류 발생: {e}")

# DataFrame 생성
df = pd.DataFrame(all_data)

# CSV 파일로 저장
df.to_csv('data_kangwon_tourism.csv', index=False, encoding='utf-8-sig')
logger.info("강원도 강릉 및 속초의 관광지 데이터를 CSV 파일로 저장 완료.")
