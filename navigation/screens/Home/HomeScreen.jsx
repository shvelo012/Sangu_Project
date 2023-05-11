import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);


  async function fetchData() {
    const url = 'https://ums.sangu.edu.ge/subject/student/current';
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,ka;q=0.7,ru;q=0.6',
      Connection: 'keep-alive',
      Cookie: '_ga=GA1.3.548079009.1678373238; connect.sid=s%3AwR0uw2xPLrBgT96GcBFoZD8EHQ_dEe87.4rSdCUrN7r%2Bg7zGxhCDhPTDezmDys6JZCH170loST4M',
      'If-None-Match': 'W/"6536-FfTJLz8Mhp1KBhfg75t4+CEUEmY"',
      Referer: 'https://ums.sangu.edu.ge/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'secret-key': '4f872cd80c33033ea0b05fe740189aff',
    };

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        compress: true,
      });

      const json = await response.json();
      return json;
      // console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  async function testFun() {
    const a = await fetchData();
    console.log(a);
    console.log(a.length);
  }
  // console.log(testFun());
  // console.log(a.length);



  testFun();


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
        style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>

      {/* <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 16 }}>
          My Component
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontSize: 16 }}>{item.body}</Text>
            </View>
          )}
        />
      </View> */}
    </View>
  );
}