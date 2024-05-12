import {Navigate, Route, Routes} from "react-router-dom"
import {Suspense, lazy, useEffect} from "react"
import {selectIsError, selectIsLoading} from "./selectors/selectors"
import {useDispatch, useSelector} from "react-redux"
import {refreshUser} from "./redux/auth/operations"
import {selectIsRefreshing} from "./redux/auth/selectors"

const WelcomePage = lazy(() => import("./pages/WelcomePage"))
const Loader = lazy(() => import("./components/Loader/Loader"))

function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectIsError)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user ...</b>
  ) : (
    <Suspense fallback={isLoading && !isError && <Loader />}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
