const Header = () => {
 return (
    <>
    <nav style={{height:80, display: 'flex', alignItems: 'center', backgroundColor:'pink'}}>   
        <img src={require("./logo.png")} style={{height:50, marginRight:'30%', marginLeft:50}} alt="" />
        <a style={{margin: 10,color: "black" }} href="/">Productos</a>
        <a style={{margin: 10,color: "black" }} href="/">Nosotros</a>
        <a style={{margin: 10,color: "black" }} href="/">Contacto</a>
        <a style={{margin: 10,color: "black" }} href="/">Carrito</a>
    </nav>
    </>
    )
}
 
export default Header;
