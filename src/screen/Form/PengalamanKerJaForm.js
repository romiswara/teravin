import { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PengalamanKerjaForm = ({ changePage, sendData }) => {
    const [riwayatPekerjaan, setRiwayatPekerjaan] = useState([
        {
            tahun: "",
            posisi: "",
            tempat_kerja: "",
            error_tahun: false,
            error_posisi: false,
            error_tempat_kerja: false,
        },
    ])
    const changeValue = (key, index, value) => {
        var temp = [...riwayatPekerjaan]
        temp[index][key] = value
        setRiwayatPekerjaan(temp)
    }

    const next = () => {
        var temp = [...riwayatPekerjaan]
        var hasError = false
        for (let a = 0; a < riwayatPekerjaan.length; a++) {
            if (riwayatPekerjaan[a].tahun == "") {
                temp[a].error_tahun = true
                hasError = true
            } else {
                temp[a].error_tahun = false
            }
            if (riwayatPekerjaan[a].posisi == "") {
                temp[a].error_posisi = true
                hasError = true
            } else {
                temp[a].error_posisi = false
            }
            if (riwayatPekerjaan[a].tempat_kerja == "") {
                temp[a].error_tempat_kerja = true
                hasError = true
            } else {
                temp[a].error_tempat_kerja = false
            }
        }
        setRiwayatPekerjaan(temp)
        if (hasError == false) {
            changePage(4)
            sendData(temp)
        } else {

        }

    }
    const addRiwayatPekerjaan = () => {

        var temp = [...riwayatPekerjaan]
        temp.push({
            tahun: "",
            posisi: "",
            tempat_kerja: "",
            error_tahun: false,
            error_posisi: false,
            error_tempat_kerja: false,
        })
        setRiwayatPekerjaan(temp)
    }
    return (
        <>
            <div className="container">
                <div className="flex1">
                    <div className='content-wrapper'>
                        {riwayatPekerjaan && riwayatPekerjaan.map((riwayat, index) => {
                            return <>
                                <div>
                                    <div className="dpflex mt2">
                                        <div className="flex1">Tahun</div>
                                        <div className="flex3">
                                            <input type="text" className="input" value={riwayat.nama} onChange={($e) => changeValue("tahun", index, $e.target.value)} />
                                            {riwayatPekerjaan[index].error_tahun == true && <p className="alert">Tahun tidak boleh kosong</p>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="dpflex mt2">
                                        <div className="flex1">Posisi</div>
                                        <div className="flex3">
                                            <input type="text" className="input" value={riwayat.nama} onChange={($e) => changeValue("posisi", index, $e.target.value)} />
                                            {riwayatPekerjaan[index].error_posisi == true && <p className="alert">Posisi tidak boleh kosong</p>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="dpflex mt2">
                                        <div className="flex1">Tempat Kerja</div>
                                        <div className="flex3">
                                            <input type="text" className="input" value={riwayat.nama} onChange={($e) => changeValue("tempat_kerja", index, $e.target.value)} />
                                            {riwayatPekerjaan[index].error_tempat_kerja == true && <p className="alert">Tempat kerja tidak boleh kosong</p>}
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
                <div className="flex1" >
                    <div className='add-box' onClick={addRiwayatPekerjaan}>
                        <FontAwesomeIcon icon={faPlus} className='add-box__icon' />
                        <h3>Add Riwayat Pekerjaan</h3>
                    </div>

                </div>

            </div>
            <button style={{ float: 'right' }} className="mt2 btn" onClick={() => next()}>Next</button>
        </>
    )
}

export default PengalamanKerjaForm