

function customContainer(customEle,container){

    const ele=document.createElement(customEle.type);
    ele.innerHTML=customEle.children;


    // ele.setAttribute('src',customEle.props.src);
    // ele.setAttribute('href',customEle.props.href);
   
    for (const key in customEle.props) {
        ele.setAttribute(key,customEle.props[key])
    }
  
    
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