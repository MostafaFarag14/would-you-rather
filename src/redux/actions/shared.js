import { getInitialData } from '../../utils/api'
import { getUsers } from './users'

export function handleInitialData() {
  return (dispatch) => (
    getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
      })
  )
}