import React from "react";

class AllansClassComponent extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
      // eslint-disable-next-line react/no-unused-state
      image: "",
    } 
}

 componentDidMount() {}
  render() {
    return (
      <>
        <h1 >CLASS DADDYYY</h1>
        <img src={"kdlfkd"} alt="daddy image" />
      </>
    );
}
}

export default AllansClassComponent;































// import React from "react";
// 
// class AllansClassComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: "",
//     };
//   }
// 
//   async componentDidMount() {
//     const response = await fetch("https://api.github.com/users/allanmosesfernandes");
//     const userInfo = await response.json();
//     this.setState({ image: userInfo.avatar_url });
//   }
// 
//   render() {
//     return (
//       <>
//          <img src={this.state.image} alt="user avatar" />
//       </>
//     );
//   }
// }
// 
// export default AllansClassComponent;
