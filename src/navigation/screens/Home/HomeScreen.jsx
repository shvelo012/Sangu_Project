import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('https://ums.sangu.edu.ge/subject/student/current', {
        headers: {
          'Cookie': 'connect.sid=s%3AMGeB2sZ0gNj76Zp_xE8aqOD9iyHANgWQ.qwpvY6sSmIEv71xv7tdRDbTlwd8x429RZPcPoF7U0t0'
        }
      });
      const data = await response.json();
      console.log(data);
      console.log("fetched");
    } catch (error) {
      console.error(error);
      console.log("done nothing");
    }
  }


  // async function fetchData() {
  //   try {
  //     const response = await axios.get('https://ums.sangu.edu.ge/subject/student/current', {
  //       headers: {
  //         'Cookie': 'connect.sid=s%3AMGeB2sZ0gNj76Zp_xE8aqOD9iyHANgWQ.qwpvY6sSmIEv71xv7tdRDbTlwd8x429RZPcPoF7U0t0'
  //       }
  //     });
  //     const data = response.data;
  //     console.log(data);
  //     console.log("fetched");
  //   } catch (error) {
  //     console.error(error);
  //     console.log("done nothing");
  //   }
  // }


  // fetchData();


  // async function fetchData() {
  //   const url = 'https://ums.sangu.edu.ge/subject/student/current';
  //   const headers = {
  //     Accept: 'application/json, text/plain, */*',
  //     'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,ka;q=0.7,ru;q=0.6',
  //     Connection: 'keep-alive',
  //     Cookie: '_ga=GA1.3.548079009.1678373238; connect.sid=s%3AMGeB2sZ0gNj76Zp_xE8aqOD9iyHANgWQ.qwpvY6sSmIEv71xv7tdRDbTlwd8x429RZPcPoF7U0t0',
  //     'If-None-Match': 'W/"6536-FfTJLz8Mhp1KBhfg75t4+CEUEmY"',
  //     Referer: 'https://ums.sangu.edu.ge/',
  //     'Sec-Fetch-Dest': 'empty',
  //     'Sec-Fetch-Mode': 'cors',
  //     'Sec-Fetch-Site': 'same-origin',
  //     'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
  //     'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
  //     'sec-ch-ua-mobile': '?0',
  //     'sec-ch-ua-platform': '"Linux"',
  //     'secret-key': '4f872cd80c33033ea0b05fe740189aff',
  //   };

  //   try {
  //     const response = await fetch(url, {
  //       method: 'GET',
  //       headers: headers,
  //       compress: true,
  //     });


  //     const json = await response.json();
  //     return json;
  //     // console.log(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function testFun() {
  //   const a = await fetchData();
  //   console.log(a);
  //   console.log(a.length);
  // }
  // console.log(testFun());
  // console.log(a.length);



  // testFun();


  // async function testFun()  {
  //   a = await fetchData();
  //   setData(a);
  //   console.log(data);
  //   console.log(data.length)
  // }

  // testFun();

  // fetchData();
  // console.log(data[0]._id);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 26, fontWeight: 'bold' }}
        onPress={() => fetchData()}
      >Home Screen</Text>

    </View>
  );
}