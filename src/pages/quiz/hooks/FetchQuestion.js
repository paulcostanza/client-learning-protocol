import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import data from '../database/data.js'

//redux actions
import { startExamAction } from '../redux/question_reducer.js'

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null })

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }))

        // i do not know why this bullshit does not work
        // async function to fetch backend data
        // (async () => {
        //     try {
        //         let question = await data

        //         if (question.length > 0) {
        //             setGetData(prev => ({ ...prev, isLoading: false, apiData: question }))

        //             // dispatch an action
        //             // allows you to update the store with an action
        //             dispatch(startExamAction(question))
        //         } else {
        //             throw new Error("No Question Avaliable")
        //         }
        //     } catch (error) {
        //         console.log(error)
        //         setGetData(prev => ({ ...prev, isLoading: false, serverError: error }))
        //     }
        // })()
    }, [dispatch])

    return [getData, setGetData]
}