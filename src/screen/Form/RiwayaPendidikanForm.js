import { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const RiwayatPendidikanForm = ({ changePage, sendData }) => {

    const [error, setError] = useState([])
    const [riwayatPendidikan, setRiwayatPendidikan] = useState([
        {
            tahun: "",
            jenjang: "",
            nama_sekolah_perguruan: "",
            error_tahun: false,
            error_jenjang: false,
            error_nama_sekolah_perguruan: false,
        },
    ])
    const changeValue = (key, index, value) => {
        var temp = [...riwayatPendidikan]
        temp[index][key] = value
        setRiwayatPendidikan(temp)
    }

    const next = () => {
        var temp = [...riwayatPendidikan]
        var hasError = false
        for (let a = 0; a < riwayatPendidikan.length; a++) {
            if (riwayatPendidikan[a].tahun == "") {
                temp[a].error_tahun = true
                hasError = true
            } else {
                temp[a].error_tahun = false
            }
            if (riwayatPendidikan[a].jenjang == "") {
                temp[a].error_jenjang = true
                hasError = true
            } else {
                temp[a].error_jenjang = false
            }
            if (riwayatPendidikan[a].nama_sekolah_perguruan == "") {
                temp[a].error_nama_sekolah_perguruan = true
                hasError = true
            } else {
                temp[a].error_nama_sekolah_perguruan = false
            }
        }
        setRiwayatPendidikan(temp)
        if (hasError == false) {
            changePage(3)
            sendData(temp)
        } else {

        }

    }
    const addRiwatayPendidikan = () => {

        var temp = [...riwayatPendidikan]
        temp.push({
            tahun: "",
            jenjang: "",
            nama_sekolah_perguruan: "",
            error_tahun: false,
            error_jenjang: false,
            error_nama_sekolah_perguruan: false,
        })
        setRiwayatPendidikan(temp)
    }


    return (
        <>
            <div className="container">
                <div className="flex1">
                    <div className='content-wrapper'>
                    {riwayatPendidikan && riwayatPendidikan.map((riwayat, index) => {
                        return <>
                            <div>
                                <div className="dpflex mt2">
                                    <div className="flex1">Tahun</div>
                                    <div className="flex3">
                                        <input type="text" className="input" value={riwayatPendidikan[index].nama} onChange={($e) => changeValue("tahun", index, $e.target.value)} />
                                        {riwayatPendidikan[index].error_tahun == true && <p className="alert">Tahun tidak boleh kosong</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="dpflex mt2">
                                    <div className="flex1">Jenjang</div>
                                    <div className="flex3">
                                        <input type="text" className="input" value={riwayatPendidikan[index].nama} onChange={($e) => changeValue("jenjang", index, $e.target.value)} />
                                        {riwayatPendidikan[index].error_jenjang == true && <p className="alert">Jenjang tidak boleh kosong</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="dpflex mt2">
                                    <div className="flex1">Nama Sekolah / Perguruan</div>
                                    <div className="flex3">
                                        <input type="text" className="input" value={riwayatPendidikan[index].nama} onChange={($e) => changeValue("nama_sekolah_perguruan", index, $e.target.value)} />
                                        {riwayatPendidikan[index].error_nama_sekolah_perguruan == true && <p className="alert">Nama Sekolah/Perguruan tidak boleh kosong</p>}
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                    </div>
                </div>
                <div className="flex1">
                    <div className='add-box'  onClick={addRiwatayPendidikan}>
                        <FontAwesomeIcon icon={faPlus} className='add-box__icon'/>
                        <h3>Add Riwayat Pendidikan</h3>
                    </div>

                </div>

            </div>
            <button style={{ float: 'right' }} className="mt2 btn" onClick={() => next()}>Next</button>
        </>
    )
}

export default RiwayatPendidikanForm