import './../../App.css';
import { useState } from 'react'
import KeahlianForm from './KeahlianForm';
import PengalamanKerjaForm from './PengalamanKerJaForm';
import PersonalForm from './PersonalForm';
import RiwayatPendidikanForm from './RiwayaPendidikanForm';
const Form = () => {
    const [activePage, setActivePage] = useState(1)
    const changePage = (value) => {
        setActivePage(value)
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
            {/* {activePage == 1 &&  <PersonalForm changePage={changePage}></PersonalForm>} */}
            {/* {activePage == 2 &&  <RiwayatPendidikanForm changePage={changePage}></RiwayatPendidikanForm>} */}
            {/* {activePage == 3 &&  <PengalamanKerjaForm changePage={changePage}></PengalamanKerjaForm>} */}
            {activePage == 1 &&  <KeahlianForm changePage={changePage}></KeahlianForm>}
        </>
    )
}

export default Form