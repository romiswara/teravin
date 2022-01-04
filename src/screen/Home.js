import db from './../database/data'
import { useState } from 'react'
import { faEye,faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const Home = () => {

    const [data, setData] = useState(db)
    return (
        <>
            <h2>Teravin test React.js</h2>
            <Link to="/form"><FontAwesomeIcon icon={faPlus} /> Add data</Link>
            <table style={{ width: '100%' }}>
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
                            <td><button><FontAwesomeIcon icon={faEye} /></button></td>
                        </tr>
                    )
                })}

            </table>
        </>
    )
}

export default Home