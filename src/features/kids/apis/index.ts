import axios from 'core/configs/axios'
import { BaseResponse, BaseErrorResponse } from 'core/types/axios'
import { SUBSCRIPTIN_END_POINT } from '../utils'
import { AxiosError, AxiosResponse } from 'axios'

export async function kidSubscription(uuid: string) {
  try {
    const respnose = await axios.post<BaseResponse>(
      SUBSCRIPTIN_END_POINT,
      JSON.stringify({ subscribe_uuid: uuid }),
    )

    return respnose.data
  } catch (error: any) {
    throw new Error(error)
  }
}
