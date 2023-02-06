import '../styles/global.css'

const App = ({Component, pageProps}) => {

    console.log(Component, pageProps, "App 컴포넌트!")
return <Component {...pageProps} />

} 


export default App