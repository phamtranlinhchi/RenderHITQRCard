import './app.scss';
import axios from 'axios';
import QRCode from 'qrcode.react';
import logo from './assets/logo-03.png';
import { useEffect, useState } from 'react';

function App() {
    // const data = [
    //   "2019600285",
    //   "2019601690",
    //   "2019605768",
    //   "2019603066",
    //   "2020603528",
    //   "2020600205",
    //   "2020605812",
    //   "2020602050",
    //   "2019605521",
    //   "2020600972",
    //   "2020605544",
    //   "2019602287",
    //   "2020602728",
    //   "2020605647",
    //   "2020603396",
    //   "2020605486",
    //   "2020604439",
    //   "2020605227",
    //   "2020603502",
    //   "2020608019",
    //   "2020607981",
    //   "2020605224",
    //   "2020603588",
    //   "2020608082",
    //   "2020603329",
    //   "2020603471",
    //   "2020604849",
    //   "2020607477",
    //   "2020603917",
    //   "2020606258",
    //   "2020606688",
    //   "2020605072",
    //   "2020600079",
    //   "2020605590",
    //   "2020600886",
    //   "2020601056",
    //   "2020605575",
    //   "2020607455",
    //   "2020600875",
    //   "2020602174",
    //   "2020605812",
    //   "2020601607",
    //   "2020600227",
    //   "2020605518",
    //   "2020603858",
    //   "2019605477",
    //   "2020601029",
    //   "2020603554",
    //   "2020605701",
    //   "2020602358",
    //   "2020607776",
    //   "2020605486",
    //   "2020607370",
    //   "2020600571",
    //   "2020607249",
    //   "2020600205",
    //   "2020607489",
    //   "2020603434",
    //   "2020601337",
    //   "2020607303",
    //   "2020606494",
    //   "2020604962",
    //   "2020608043",
    //   "2020604803",
    //   "2020602560",
    //   "2020604283",
    //   "2020606095",
    //   "2020601159",
    //   "2020605678",
    //   "2020602358",
    // ];

    // const student_code = [
    //     2021603611, 2021606916, 2021600170, 2021608239, 2021065122, 2021602316,
    //     2021600362, 2021608464, 2021600336, 2021605732, 2021600258, 2021602751,
    //     2021603320, 2021605774, 2021605294, 2021601358, 2021605532, 2021607789,
    //     2021607799, 2021605042, 2021601564, 2021606058, 2021601012, 2021600287,
    //     2020605678, 2021600222, 2021605274, 2020601917, 2021600576, 2021602608,
    //     2021607834, 2021601496, 2021607725, 2021601028, 2021602647, 2021608423,
    //     2021606829, 2021600119, 2021601910, 2020607923, 2021603130, 2021605548,
    //     2021600903, 2021600552, 2021601533, 2021600850, 2021604432, 2021601412,
    //     2021600988, 2021600959, 2021601817, 2021603812, 2021605716, 2021601100,
    //     2021600216, 2021605435, 2021601930, 2021602969, 2021608538, 2021601739,
    //     2021600831, 2021605893, 2021605960, 2021608710,
    // ];

    // const full_name = [
    //     '????? Th??? Huy???n',
    //     'Tr???n Minh Tu???n',
    //     'Ph???m ????nh Ti???n',
    //     'Nguy???n Ti???n Ki??n',
    //     '????? Ng???c Giang',
    //     'ph???m xu??n hi???u',
    //     'Cao Trung ?????c',
    //     'Nguy???n Th??? Th??',
    //     'L????ng Minh Anh',
    //     '?????c Minh Ho??ng',
    //     'Ph???m Anh Tu???n',
    //     'L????ng B?? Ho??ng',
    //     'Ph???m ????ng ????ng',
    //     'Tr???n Th??? Th????ng',
    //     '?????ng Ho??ng Ph????ng',
    //     'Nguy???n V??n Qu???ng',
    //     'L?? Th??? Ng???c ??nh',
    //     'Tri???u ????ng Tu???n',
    //     'Nguy???n Ph??c C?????ng',
    //     '????? Th??? Th????ng Mai',
    //     'Nguy???n Qu???c Tu???n',
    //     'Tr???nh Thu H??',
    //     'Nguy???n Thu Ho??i',
    //     'Nguy???n Ti???n H??ng',
    //     'V?? Minh Ngh??a',
    //     'Nguy???n Ho??ng D??ng',
    //     'V?? M???nh',
    //     'Nguy???n Vi???t L???i',
    //     'L?? Th??? Mai Lan',
    //     'Ph???m Th??? Hoa',
    //     'Tr???n ??o??n Xu??n Th??nh',
    //     'Nguy???n Duy S??n',
    //     'Nguy???n H???i Thanh',
    //     'Nguy???n Th??? Huy???n Trang',
    //     'Tr???n Th??? Tr?? Mi',
    //     '????? ????nh Long',
    //     'Nguy???n Trung Hi???u',
    //     'V?? Th??? Thanh',
    //     'Tr????ng C??ng M???nh',
    //     'Nguy???n Quang Linh',
    //     'T??? Anh Duy',
    //     'L?? Th??? Sen',
    //     'Ho??ng ?????c Nam',
    //     '????? Ti???n Anh',
    //     'T??? Nh???t L????ng',
    //     'Nguy???n Duy Minh Qu??n',
    //     'Nguy???n Th??? Trang',
    //     'Nguy???n Th??? V??n',
    //     'Tr???n Qu???c Doanh',
    //     'Tr???n Th??? H???ng',
    //     '??inh H???ng Li???u',
    //     'L?? Thu Ph????ng',
    //     'Nguy???n Th??? Mai',
    //     'Ng?? Th??? Thanh Th???o',
    //     'L?? L?? Na',
    //     'Nguy???n Th??? Thu H?????ng',
    //     'Tr????ng Anh Hi???u',
    //     'Nguy???n Xu??n ?????t',
    //     'Nguy???n Vi???t Ho??ng',
    //     'Nguy???n Vi???t V?????ng',
    //     '??inh V??n Thi',
    //     'Nguy???n M???nh Vinh',
    //     'Ninh V??n H???i',
    //     'Tr???n Thu Trang',
    // ];

    const data = [];
    for (let i = 0; i < student_code.length; i++) {
        let obj = {
            student_code: student_code[i],
            full_name: full_name[i],
        };
        data.push({ ...obj });
    }
    // const div = document.querySelectorAll('.qr-code');

    // var download = function (ele, filename) {
    //     var link = document.createElement('a');
    //     link.download = `${filename}.png`;
    //     link.href = ele.toDataURL();
    //     link.click();
    // };
    // download(
    //     div[70].querySelector('canvas'),
    //     div[70].querySelector('h2').textContent
    // );

    // const [data, setData] = useState([]);

    // useEffect(async () => {
    //     const resData = await axios.get(`https://api.hithaui.com/api/users`);
    //     const { data } = resData;

    //     setData(data);
    // }, []);

    // useEffect(() => {
    //     const callApi = async () => {
    //         const resData = await axios.get(
    //             `https://api.hithaui.com/api/users`
    //         );
    //         const { data } = resData;

    //         setData(data);
    //     };
    //     callApi();
    // }, []);

    console.log(data.length);

    return (
        <div className='app'>
            {data.length > 0 &&
                data.map((item, index) => (
                    <div className='qr-code' key={index}>
                        <QRCode
                            size={200}
                            level='H'
                            value={`https://hithaui.com/user/${item.student_code}`}
                            // imageSettings={{
                            //     src: logo,
                            //     height: 60,
                            //     width: 60,
                            //     excavate: true,
                            // }}
                        />

                        <h2 style={{ textAlign: 'center' }}>
                            {item.full_name}
                        </h2>
                    </div>
                ))}
            {/* <div className='qr-code'>
                <QRCode
                    size={200}
                    level='H'
                    value={`https://hithaui.com/user/2020603802`}
                   
                /> */}
            {/* <img src={logo} alt="" /> */}
            {
                // download(`http://localhost:3000/user/${item}.jpeg`, `${item}.jpeg`)
            }

            {/* <h2 style={{ textAlign: 'center' }}>Nguy???n Ho??ng L??m</h2> */}
            {/* </div> */}
        </div>
    );
}

export default App;
