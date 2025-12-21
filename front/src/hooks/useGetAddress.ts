import axios from 'axios';
import {useEffect, useState} from 'react';
import type {LatLng} from 'react-native-maps';
import Config from 'react-native-config';

import {errorMessages} from '@/constants';

function useGetAddress(location: LatLng) {
  const {latitude, longitude} = location;
  const [result, setResult] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|route|political&key=${Config.GOOGLE_API_KEY}&language=ko`,
        );
        const address = data.results.length                         
          ? data.results[0].formatted_address                       
          : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;      // 도로명주소 위도,경도 4자리

        setResult(address);
      } catch (error) {
        setResult(errorMessages.CANNOT_GET_ADDRESS);  // 결과 알수없음
      }
    })();
  }, [latitude, longitude]);

  return result;
}

export default useGetAddress;
