import axios from 'core/configs/axios';
import {BaseResponse, BaseErrorResponse} from 'core/types/axios';
import {PLAYER_LEVEL, SUBSCRIPTIN_END_POINT} from '../utils';
import {AxiosError, AxiosResponse} from 'axios';
import {Level, ResponseLevels} from '../types/kids.types';

export function transformLevel(levels: Level[]) {
  return levels.map(level => {
    return {
      name: level.number.toString(),
      id: level.id.toString(),
    };
  });
}
export async function kidSubscription(uuid: string) {
  try {
    const respnose = await axios.post<BaseResponse>(
      SUBSCRIPTIN_END_POINT,
      JSON.stringify({subscribe_uuid: uuid}),
    );

    return respnose.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function kidLevels(kidId: number) {
  console.log(`${PLAYER_LEVEL}${kidId}/`);
  const response = await axios.get<BaseResponse<ResponseLevels>>(
    `${PLAYER_LEVEL}${kidId}/`,
  );
  console.log(response.data.data.levels);
  return response.data.data.levels.map(level => {
    return {
      name: level.number.toString(),
      id: level.id.toString(),
    };
  });
}
