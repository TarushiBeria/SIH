function Option1() {
    const Type = () => {
    alert(document.getElementById("op1").innerHTML);
    }
    return (
      <div className='options' id="op1" onClick={Type}>What Services does the Department of Justice offer?</div>
    );
}
export default Option1;