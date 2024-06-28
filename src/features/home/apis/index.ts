import axios from 'core/configs/axios'
import { BaseResponse, BaseErrorResponse } from 'core/types/axios'
import { HOME_END_POINTS } from '../utils/home.constant'
export async function getSubcriptions(parentId: number) {
  console.log(`/${HOME_END_POINTS.getSubscriptions}/${parentId}/`)
  try {
    const response = await axios.get(`/${HOME_END_POINTS.getSubscriptions}/${parentId}/`, {
      headers: {
        'App-type': 'parent',
      },
    })

    return response.data.data
  } catch (error) {
    console.log('eeeeee', error)
  }
}
