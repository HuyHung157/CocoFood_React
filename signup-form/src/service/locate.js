import Axios from 'axios';
import * as API from './config';

class locateService {
    GetProvince() {
        return Axios({
            method: "POST",
            url:
                `${API.urlAPI}/commonsData/getListProvince`,
            // data: user
            Body: {
                "Data": {
                }
            },
            Headers: {
                "AppId": "8bb36621fab8f0ff68660ee5db9758a2",
                "Signature": "WZf0GMtXmjJLRz9UrjWI+lpdbe4ov31wW7Wm6bRsARSZxdDV2rHKEqjZaln9LQXhHrujnlXsreVtKuX6Ba7+8zgUwT4Rhsb9vf7dPSTTYYD/QaB2majaBLF1sTE1ud5lkYHK93pcDVnKLC2GCsgM5MNAwxG9nF16Ka8WNH6GEJZsKlPMhoVcWhnvy6LsXAdsu/k+AtTbiHFelcMnpSVoN++/45lbADuxQAp3SsMRiwGLUjKr1PLY9hLwK6USCYTAVODWid9bE57n7LXi081Ph1Ws4mYfKXg/1VTVKxDAPts9U/X5jZNSANPPrAE3EkSjg3Ynv4Kz5d1MyuFewnAEDQ==",
                "Component-Type": "application/json"
            }
        })

    }











    // AuthSignUp(user) {
    //     return Axios({
    //         method: "POST",
    //         url:
    //             `${API.urlAPI}/QuanLyNguoiDung/DangKy`,
    //         data: user
    //     })

    // }
    // Booking(data) {
    //     return Axios({
    //         method: "POST",
    //         url: `${API.urlAPI}/QuanLyDatVe/DatVe`,
    //         data,
    //         headers: {
    //             Authorization: `Bearer ${user.accessToken}`
    //         }
    //     })
    // };
}
export default locateService;