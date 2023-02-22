import React, { Suspense } from 'react'
// react-router 5版本如下写法，react-router6 SWitch==>routes,Redirect=>Navigate
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))
export default function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/home" >首页</Link>
        <Link to="/login">登录</Link>
        {/* 按需加载需要Suspense */}

        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>

          </Switch>
        </Suspense>
      </div>


    </Router>
  )
}
// import React, { Suspense } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom'
// // import './App.scss'
// const Login = React.lazy(() => import('@/pages/Login'))
// const Home = React.lazy(() => import('@/pages/Home'))

// export default function App() {
//   return (
//     <Router>
//       <div className="app">
//         {/* <Link to="/login">登录</Link>
//         <Link to="/home">首页</Link> */}
//         <Suspense fallback={<div>loading...</div>}>
//           <Switch>
//             <Redirect exact from="/" to="/home"></Redirect>
//             <Route path="/login" component={Login}></Route>
//             <Route path="/home" component={Home}></Route>
//           </Switch>
//         </Suspense>
//       </div>
//     </Router>
//   )
// }