# Lets-Get-Classy-
Namste React Episode 8

**Class Based Component**
>its a normal JS class
>you have to use extends React.Component along with the name of class

Class UserClass extends React.Component {
  render(){
  
  return (
      <div className="user-card">
        <h2>Name: Sittu</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: anshu.possible@gmail.com</h4>
      </div>
    );
  
  }
}

>This become the class Based components 
>So this extends React.Component will make react know this is class based components
 and start tracking it this is the way we create class based components

 >Now under this  Class UserClass extends React.Component there will be render() method will be there

> and render method will return peace of JSX which will be displayed onto the UI 

> so this JSX which will be converted into HTML and render onto the web page


** Difference between Class Component and functional Based Component
>>So Functional BAsed components is a function which return some peace JSX
>>& Class Based Component is a class which have render() method which return some peace of JSX


**React.Component**
>This React.Component is basically is a class which is given to us by react and user Class is
 inheriting some property from it

>This React.Component is given to us by react we will have to import this <b> React.Component</b>
>This React.Component comes from "import React from 'react'

>React.Component is a class which is there inside a react package
 it has react and we extends React.Component 
 
  constructor(props){
        super(props);
        console.log(props);
    }

 > Just life functional component we have to export as well 
 
<b>How to pass Props into this class based components</b>
>to pass a props in class based components we have to create a constructor 
> we will have to create a constructor 
>and this constructor will now receive this props 
>and also we will also write super(props) and have to use this keyword super(props);
>if you don't write super(props) it will throw an error so always have to write super(props)

<b>Why we have to always write Super(props)??</b>


**How to use props in class based components inside render function
>one we revived the name inside the constructor(above)
> so inside the render function we have to use { this.props.name}
>we have to always use this keyword inside of the class
>so that this props can be access anywhere inside class { this.props.name}

<UserClass name={"Sittu Singh (Class)"}/>
 <h2>Name: {this.props.name}</h2>
 <h3>Location: {this.props.location}</h3>
  <h4>Contact: {this.props.contact}</h4>
 
>So in class based components the way of passing props is same as functional components but
>but when you receive it you receive inside constructor
> and then use it like {this.props.name}
>whenever instance this class is crated a constructor is called 
>you can pass more props like this as well 2:22:20
>we can destructuring as well  
 
> all these props which u have passed below will combine to a single object 

<UserClass name={"Sittu singh via props in class"} location="Pune"/>
 

> and that object will passed in this props 

 constructor(props) {
    super(props);

    console.log(props);
  }
  

How to destructuring in class based component  

>class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    const {name, location} = this.props;

    return (
      <div className="user-cart">
        <h1 style={{ textAlign: "Center" }}>
          This is coming from Class based Component{" "}
        </h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
      </div>
    );
  }
}  
  
 
 **Super(Props)**
>It is used to call the constructor of its parent class. 
 This is required when we need to access some variables 
 of its parent class. 
 
**Rendering,Invoking, Mounting a Functional Component what does it means
>on your web page if there is functional components it loads that means you are calling that functional components 
 
**Creating an instance of a class based component 
> Loading class based components on web page that means I am creating new instance of a class 
 
 
 
<b>How To create State variable inside class components</b>

>Loading class based components means you are creating instance of class
>Loading class based components on web page that means I am creating new instance of a class 
 and giving it some props 
 
>So whenever we create instance of class this constructor is called  
>and this is the best place to receive the props 

>and also this best place to create state variable

>If you have to create state variable then this is the best place to create state variable
>using this.state
>this.state is a reserve keyword 
>this.state is big whole object which contains all state variable

constructor(props){
        super(props);
        console.log(props);
		this.state = {
		count:0,
		}
    }
	
>in the class based components if I want to create second state then you have to create here only 	
>we have to create Inside this.state only as this is a big object which holds all the variables
 
 constructor(props){
        super(props);
        console.log(props);
		this.state = {
		count:0,
		count2:2,
		}
    }

>How to use this count now
 >><h4>Count = {this.state.count} </h4>	
	
>if we have to create state variable (hooks) twice then we have to write this two times in function based components
  const [count] = useState(0);
  const [count2] = useState(1);
  
> behind the scene the react uses a big one object to keep in this state 
  
  constructor(props){
        super(props);
		this.state = {
		count:0,
		count2:2,
		}
    }
>State was created whenever class instance was created

** OnClick Hander takes a call back function 

  <button onClick={() => {}}>Click Me</button>

**How to update state variable in class based components

>in functional based components we have another keyword set which help in updating the function sate variable
> We don't update state variable directly in class based components
> we will never modify our state variable by putting some value  
  <b>
  never update state variable directly shown below  
  this.state.count = this.state.count +1;
 </b>
>it will create inconstancy in program  

>So in the class based components state variable is updated using this.setState function   
>this.setState() can be use anywhere in the class to update state variable
>so in the this.setState (we will pass object which contains the updated value of state variable  )
   
   <button onClick={() => {
         
          this.setState({
             count: this.state.count + 1,
          });
        }}
		>Click Me</button>

>whenever this state variable will update the count React will re-render the components
 and it is changing the count value
 
>if you want to update two state variable together then you have to batch it up and you can update both of them together
   
   <button onClick={() => {
         
          this.setState({
             count: this.state.count + 1,
			 count2: this.state.count2 + 1,
          });
        }}
		>Click Me</button>
> if there are 10 count you need to update and you are giving above two only then it will 
  only update two and it will not touch others
>that is if we are sending only count then it will only modify the count variable it will not touch others 

>Behind the scene it will only update this portion of this object (Count)
>It will find the diff between the two Object   
  
  
**Life Cycle of class based Component**
>Loading and mounting is same 
>when this About Us Page is render on the web page it start rendering this (below) jsx  
   
   return (
    <div>
      <h1>About</h1>
      <h2>This Page consist information about the React JS</h2>   
      <UserClass name={"Sittu Singh (Class)"} contact={"anshu.possible@gmail.com"} location={"Undri Pune"}/>
     
    </div>
  );

> So while rendering it sees the UserClass is over here which is import from UserClass
>Now {import UserClass from "./UserClass";} this parent is mounted 
>and as soon it sees there is UserClass class component there so it start to load UserClass class Now
>Now new a instance of class is created
>Now when this class is called what happens is the constructor is called 
>First thing when a class is load a constructor is loads 
>that is it create a instance of a class
 
   constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

>The first thing when class is called is constructor is called 
>Once the constructor is called then render is called   
>First constructor then render 
>That's how class is instantiated

>Some people will write like 
       class About extends React.Component {}
>Some people will write like
    import { Component} from "react"
	class About extends Component {}
>both are same only difference is that it is de structuring is happening here 
 
<b>How the component are loaded or Mounted on the DOM </b>
> When the about component is loaded as this is the parent component so first of all 
  a new instance of this class is created so the constructor of this parent is called   
> Then the parent of this Render is called  then it goes to the children
> and trigger the Life cycle and now the constructor of child is called 
> Then Render of child will called 
>This how life cycle of class component works 
 
 
>Class Based component also have one more method which is 
**Component did Mount**
> when this component is loaded then first of all constructor is called then  render method is called
  and once this class based component is mounted on the DOM or its there onto the DOM
  Then This ComponentDidMount is called   

<b>How this Component Did Mount Works</b>
> when this userClass Component is loading (1:47:12) first of all this constructor is called 
  Then render is called after that ComponentDidMount is called 
>This is the life cycle of this react Component
<b> Constructor Render Method and then ComponentDidMount</b>
>This will called when the component is already mounted onto the page

*what if this ComponentdidMOunt is in the parent component also then "In what order will these method will called"
>>So here first Parent constructor then parent render method will be called and when this rendering going on
  it will go to the UserClass based component saw the children of this parent it has not yet finshied mounting
  it will be go to the class based component and trigger its life cycle method so
  here again child constructor will be render then render method will render and then
  Child ComponentDidMount will mount properly then the
  Parent ComponentDidMount will be called.
> SO this Parent ComponentDidMount will called once the component is complete Mounted onto the WEB Page 

**<b>why this ComponentDidMount Use </b>**  

>ComponentDidMount is used to an make API Call
>this quickly render the component and then make API call 
>same life useEffect in functional based component
>So we use ComponentDidMount in classed based component to fetch the API but before that
 it quickly render the component so that API get the data
>This use to make API call 

** what will happens when there more then two or Multiple children in a class based component
>when we are using this class component twice that means we are creating two different instance of that class
 or same class
>it can have same class but different props  
> React will batch the render phase for these two child, so what happen these two child render phase will happen 
  then commit phase will happen together
>This is an optimization of react
>So first child constructor will be called the first child render will be called and then render phase is finshied 
 now it will start the render phase of second child i.e second child constructor second child render
> And now commit phase will be batch together 
>that is why the output will in below order:

  -Parent Constructor
  -Parent Render 
       -First Child Constructor
       -First Child Render 
       -Second Child Constructor
       -Second Child Render
	   
  -First Child ComponentDidMount
  -Second Child ComponentDidMount
  -Parent ComponentDidMount 	   
	   
<DOM UPDATED - IN SINGLE BATCH>
	   
  -First Child ComponentDidMount
  -Second Child ComponentDidMount
  -Parent ComponentDidMount  
  
  

*Why React is doing like this(above)
>when the about of this mounting happens first of all parent constructor will be called
 so parent constructor will be printed 
> After that render will happen in the render phase and parent render will be printed 
>Now it seems that it is the turn for the first child which is <UserClass/>
 it goes to the first child and start the life cycle method of its child 
 which is Constructor render 
>So it will call the constructor of the first child and render of the first child and print
  First Child Constructor
  First Child Render   
> Now as there are two children over here react optimizes this and not call this ComponentDidMount
  of First child first what it will do is will batch the render phase for this two child

>so for these two child Render phase will happen then commit phase will happen together
>this is optimization of react 

>AFter this the commit phase will be batch together and that's why the output will be in this order 

  -Parent Constructor
  -Parent Render 
       -First Child Constructor
       -First Child Render 
       -Second Child Constructor
       -Second Child Render
	   
  -First Child ComponentDidMount
  -Second Child ComponentDidMount
  -Parent ComponentDidMount 
  
  
<b>Why it is doing like this ?</b>

> React is batching up the multiple children because once the commit phase is start
  React try to update the DOM & DOM manipulation is most expensive thing when we are updating a component
  as it takes a lot of time so react want to batch the render
>so when it try to update the DOM it find out all the children and batch it out 
 as render phase is very fast commit phase takes time
>Then this commit phase happens  
>this will optimization the react 


Class Component Life Cycle
> when the component is mounted, it is mounted in two phases 

Why React is fast
>it has two phases 
  I.> Render Phase:
       Render Phase has constructor and render 
 II.> Commit Phase:
        In the commit phase react actually update the DOM and 
		then ComponentDidMount is called.

**Mounting Phase 
 
>When the component is mounting first of all Constructor is called 
 after that render is called, this constructor and render is render phase 
 then the react actually updates the DOM then ComponentDidMount is called 
 
>That's why ComponentDidMount is based place to make the API call

>This Mounting cycle is happens for every Child every parent and every component in react
 goes through Life Cycle Method 
 
 
 
 
**How to make API call in Class based Component.**
> you can make ComponentDidMount as async
>1:01:05
 
*Mounting Cycle is finished when component renders once with dummy data in this mounting phase
>when we do setState Updating phase start
>setState update state variable
>when this state variable is updated react trigger the render once again 
>Now this render happens but this time state variable has been changed with updated value so react will render it.
>In the update cycle react will update the DOM with the new value now 

ComponentDidUpdate:
>when react has updated its DOM then ComponentDidUpdate is called 
>This is called after the update Cycle

** First of all Mounting Life Cycle happens then update cycle happens 

/**
 * 
 * --------Mounting Life Cycle--------
 * Constructor (Dummy Data)
 * Render (dummy)
 *      <html Dummy>
 * Component Did Mount
 *      <API Call>
 *     <this.setState> -> State variable is updated 
 * 
 * ------UPDATE----------
 * 
 *       render(with API Data)
 *     <HTML (New API data)     
 *  
 * Component Did Update
 * 
 */
 
**ComponentWillUnmounting 
>Unmounting means when the component will disappear from HTML
>Mounting means showing this on UI and unmouting means removing from the UI
>Unmounting is disabling from UI 
>Then Unmounting will called 
>it is called when you leave the page of go to another page 

  this.timer = setInterval(() => {
         console.log("Hello React");
      }, 1000);
  
>SO this peace of code will execute after every time no matter you are navigating to another page
>this is con of single page application 
> So to avoid this type interval  of we use ComponentWillUnmounting
> we have to use clearInterval()

     ComponentWillUnmounting(){
	    clearInterval(this.timer);
	 }


**useEffect and ComponentDidMount both are not same.

>useEffect is called after each and every render
>after first render ComponentDidMount is called 
>after every subsequent render it is updated not mounted
>in useEffect we use [ empty dependency array ] which is called in the initial render
>[ count ] every time the count changes this will be called

>ComponentDidUpdate is called after every update  

** What to Do if there will be a two condition where change in one Count and another Change is in Count2
> so for this situation in functional component we have to use Two useEffect
  One for First Count and Second for another Count2 condtions 
  
>In the class based component you have to write two if else condition
 
 ComponentDidUpdate (prevProps, prevState) {
    if(
	     this.state.count !== prevState.count
		
	)
	{
	    code which will execute
	}
	if (
	    this.state.count2 !== prevState.count
	)
	   {
	   	   code which will execute
	   }
 }
 
** How to stop setInterval in useEffect.

  useEffect( () =>{
     
	 setInterval(() => {
         console.log("Hello React");
      }, 1000);
	  
	  return ()=>{
	  
	     //this function is called when you are unmouting the component
	  }
    
   }, []);


>you can return a function from useEffect

** Interview on useEffect

 useEffect(() =>{
    
	console.log("useEffect"); // This will call second
    return() => {
	  console.log("useEffect Return")  // this will displayed when we move to another page like "ComponentWillUnmounting"
	};
 },[]);
 
 console.log("render");  // This will call first
