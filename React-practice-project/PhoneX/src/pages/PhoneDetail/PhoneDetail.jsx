import React from 'react'
import styles from './PhoneDetail.module.css'
import { useLocation, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../Contexts/DataContext'
const PhoneDetail = () => {
    // const data=useContext(DataContext) we not wrap this component with datacontext.provider so we cant access data 
    const { productId } = useParams(); //we destructure productId property from obj return by useParams
    const { state } = useLocation();   //we destructure state property from object return by useLocation
    const { key } = useLocation();   //we destructure key property from object return by useLocation
 
    return (
        <div className={styles.detailpage}>
            {state?.map((phone) => {

                if (phone.id === Number(productId)) {
                    return (

                        <div className={styles.carddetail} key={phone.id}>
                            <div className={styles.imagebox}>
                                <img src={phone.thumbnail} alt="" />
                            </div>
                            <div className={styles.description}>
                                <h1>{phone.title}</h1>
                                <h1>${phone.price}</h1>
                                <p className={styles.paragraph}>{phone.description}</p>
                            </div>
                        </div>

                    )
                }

            })}
        </div>
    )
}

export default PhoneDetail