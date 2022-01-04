import db from './../database/data'
import { useState,useEffect } from 'react'
import { faEye,faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getData } from '../services/dataServices';
const Home = () => {    
    const [data, setData] = useState()
    useEffect( async() => {
        console.log("dsfd")
        var dataFromStorage = await getData()
        console.log("dataFromStorage",dataFromStorage)
        setData(dataFromStorage)
    },[])
    return (
        <>
            <h2>Teravin test React.js</h2>
            <Link to="/form"><FontAwesomeIcon icon={faPlus} /> Add data</Link>
            <table style={{ width: '100%',textAlign:'left' }}>
                <tr>
                    <th>
                        ID No
                    </th>
                    <th>
                        Nama
                    </th>
                    <th>
                        Alamat
                    </th>
                    <th>

                    </th>
                </tr>
                {data && data.map((singleData, index) => {
                    console.log("singleData", singleData)
                    return (
                        <tr>
                            <td>{singleData.personal.id}</td>
                            <td>{singleData.personal.nama}</td>
                            <td>{singleData.personal.alamat}</td>
                            <td>  <Link to={`/detail/${singleData.personal.id}`}> <FontAwesomeIcon icon={faEye} /></Link></td>
                        </tr>
                    )
                })}

            </table>
        </>
    )
}

export default Home