import Header from '../components/header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '960px',
    backgroundColor: '#2c2c2c',
    height: '100%',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>{`
        body { 
            background-color: #0c0c0c;
            color: #ffffff;
            margin: 0;
            min-height: 400px;
        }
    `}</style>
  </div>
)

export default Layout
