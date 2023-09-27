

function customContainer(customEle,container){

    const ele=document.createElement(customEle.type);
    ele.setAttribute('src',customEle.props.src);
    ele.setAttribute('href',customEle.props.href);
    ele.innerHTML=customEle.children;
    
    container.appendChild(ele);
}

const customEle={
    type:'a',
    props:{
        href:"https://www.google.com",
        src:'_blank'
    },
    children:'Click Me'
}

const reactContainer=document.getElementById('root')

customContainer(customEle,reactContainer);