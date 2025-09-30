//PascalCasing
function Message(){
    // JSX : JavaScript XML
    // Will be compiled to javascript
    const name = "Daniel Lim";
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;