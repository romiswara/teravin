import { getData } from "../services/dataServices"
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Detail = () => {
    var location = useLocation()
    location = location.pathname.toString()
    location = location.split('/')

    const [id, setId] = useState(location[2])
    const [data, setData] = useState()
    useEffect(async () => {
        var tempData = await getData()
        var currentUser = tempData.find(data => {
            return data.personal.id == id
        })
        setData(currentUser)
    }, [])
    return (
        <>
            {data && <div className="card">
                <h2>Personal</h2>
                <ul>
                    <li>Nama : {data.personal.nama}</li>
                    <li>Alamat : {data.personal.alamat}</li>
                    <li>Jenis Kelamin : {data.personal.jenis_kelamin}</li>
                    <li>Usia : {data.personal.usia}</li>
                </ul>
            </div>}

            {data && <div className="card">
                <h2>Pendidikan</h2>
                {data.pendidikan && data.pendidikan.map(pedidikan => {
                    return <>
                        <ul>
                            <li>Jenjang : {pedidikan.jenjang}</li>
                            <li>Tahun : {pedidikan.tahun}</li>
                            <li>Nama Sekolah / Perguruan : {pedidikan.nama_sekolah_perguruan}</li>
                        </ul>
                    </>
                })}
            </div>}

            {data && <div className="card">
                <h2>Pengalaman Kerja</h2>
                {data.pengalaman && data.pengalaman.map(pengalaman => {
                    return <>
                        <ul>
                            <li>Posisi : {pengalaman.posisi}</li>
                            <li>Tahun : {pengalaman.tahun}</li>
                            <li>Tempat Kerja : {pengalaman.tempat_kerja}</li>
                        </ul>
                    </>
                })}
            </div>}

            {data && <div className="card">
                <h2>Keahlian</h2>
                {data.keahlian && data.keahlian.map(keahlian => {
                    return <>
                        <ul>
                            <li>{keahlian.skill}</li>
                        </ul>
                    </>
                })}
            </div>}
        </>
    )
}

export default Detail