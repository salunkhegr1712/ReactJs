
const object={
    // name of component should be start from the capital letter 
    Heading:function(){
        return <header className="header"><h1>Keeper</h1></header> ;
    },
    Foot:function(){
        // we are using JS predefined constructor which create a day variable and which so much helpfull
        // in finding date year and so many stuff relted to the calender 
        const day=new Date();
        let c=day.getFullYear();
        // {} we use the curly braces so that we may able to add the value of variables inside the html tags 
        return <footer className="footer"><p>Copyright © Ghansham ({c})</p></footer>
    },
    Note:function(){
        return (
            <div className="note">
                <h1>Title</h1>
                <p>Content</p>
            </div>
        );
    }
}

export default object;