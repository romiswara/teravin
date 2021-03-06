import './../../App.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import KeahlianForm from './KeahlianForm';
import PengalamanKerjaForm from './PengalamanKerJaForm';
import PersonalForm from './PersonalForm';
import RiwayatPendidikanForm from './RiwayaPendidikanForm';
import uniqid from 'uniqid';
import { saveData } from '../../services/dataServices';
const Form = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        personal: {},
        pendidikan: {},
        pengalaman: {},
        keahlian: {}
    })
 
    const [activePage, setActivePage] = useState(1)
    const changePage = (value) => {
        setActivePage(value)
    }

    const saveDataPersonal = (value) => {
        value.id = uniqid()
        setData(prev => {
            return {
                ...prev,
                personal: value
            }
        })
        console.log("personal", data)
    }
    const saveDataRiwayatPendidikan = (value) => {
        setData(prev => {
            return {
                ...prev,
                pendidikan: value
            }
        })
    }
    const saveDataRiwayatPengalaman = (value) => {
        setData(prev => {
            return {
                ...prev,
                pengalaman: value
            }
        })
    }

    const submit = async (value) => {
      
        var temp = {...data}
        temp.keahlian = value
        //submit
        if(await localStorage.getItem("data")){
            var fetchData = await JSON.parse(localStorage.getItem("data"))
            var datastorage = [...fetchData,temp]
            await saveData(datastorage)
            navigate('/')
        } else {
            var listdata = []
            listdata.push(temp)
            await saveData(listdata)
            navigate('/')
        }
    }
    return (
        <>
            <h2>Form Submission</h2>
            <div className="process">
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', zIndex: 1 }}>
                    <div className="process_line"> </div>
                    <div style={{ flex: 1 }}>
                        <div className={`process_indicator ${activePage == 1 ? "active" : ""} ${activePage > 1 ? "pass" : ""}`}></div>
                        <p>Data Personal</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className={`process_indicator ${activePage == 2 ? "active" : ""} ${activePage > 2 ? "pass" : ""}`}></div>
                        <p>Riwayat Pendidikan</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className={`process_indicator ${activePage == 3 ? "active" : ""} ${activePage > 3 ? "pass" : ""}`}></div>
                        <p>Pengalaman Kerja</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className={`process_indicator ${activePage == 4 ? "active" : ""} ${activePage > 4 ? "pass" : ""}`}></div>
                        <p>Keahlian</p>
                    </div>
                </div>
            </div>
            {activePage == 1 && <PersonalForm changePage={changePage} sendData={saveDataPersonal}></PersonalForm>}
            {activePage == 2 && <RiwayatPendidikanForm changePage={changePage} sendData={saveDataRiwayatPendidikan}></RiwayatPendidikanForm>}
            {activePage == 3 && <PengalamanKerjaForm changePage={changePage} sendData={saveDataRiwayatPengalaman}></PengalamanKerjaForm>}
            {activePage == 4 && <KeahlianForm submitData={submit}></KeahlianForm>}
        </>
    )
}

export default Form