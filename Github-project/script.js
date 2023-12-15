const API = 'https://api.github.com/users';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'swatibbhadoriya',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: '' };

  }
  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url).
    then(res => res.json()).
    then(data => {
      this.setState({
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        location: data.location,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        homeUrl: data.html_url,
        notFound: data.message });

    }).
    catch(error => console.log('Oops! . There Is A Problem'));
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      React.createElement("div", null, 
      React.createElement("section", { id: "card" }, 
      React.createElement(SearchProfile, { fetchProfile: this.fetchProfile.bind(this) }), 
      React.createElement(Profile, { data: this.state })), 

      React.createElement("span", { className: "hesmaili" }, "GitHub Card With ReactJs - Created By Swati Singh")));


  }}

class SearchProfile extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "search--box" }, 
      React.createElement("form", { onSubmit: this.handleForm.bind(this) }, 
      React.createElement("label", null, React.createElement("input", { type: "search", ref: "username", placeholder: "Type Username + Enter" })))));



  }

  handleForm(e) {
    e.preventDefault();
    let username = this.refs.username.getDOMNode().value;
    this.props.fetchProfile(username);
    this.refs.username.getDOMNode().value = '';
  }}


class Profile extends React.Component {
  render() {
    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;
    if (data.notFound === 'Not Found')
    return (
      React.createElement("div", { className: "notfound" }, 
      React.createElement("h2", null, "Oops !!!"), 
      React.createElement("p", null, "The Component Couldn't Find The You Were Looking For . Try Again ")));else



    return (
      React.createElement("section", { className: "github--profile" }, 
      React.createElement("div", { className: "github--profile__info" }, 
      React.createElement("a", { href: data.homeUrl, target: "_blank", title: data.name || data.username }, React.createElement("img", { src: data.avatar, alt: data.username })), 
      React.createElement("h2", null, React.createElement("a", { href: data.homeUrl, title: data.username, target: "_blank" }, data.name || data.username)), 
      React.createElement("h3", null, data.location || 'I Live In My Mind')), 

      React.createElement("div", { className: "github--profile__state" }, 
      React.createElement("ul", null, 
      React.createElement("li", null, 
      React.createElement("a", { href: followers, target: "_blank", title: "Number Of Followers" }, React.createElement("i", null, data.followers), React.createElement("span", null, "Followers"))), 

      React.createElement("li", null, 
      React.createElement("a", { href: repositories, target: "_blank", title: "Number Of Repositoriy" }, React.createElement("i", null, data.repos), React.createElement("span", null, "Repositoriy"))), 

      React.createElement("li", null, 
      React.createElement("a", { href: following, target: "_blank", title: "Number Of Following" }, React.createElement("i", null, data.following), React.createElement("span", null, "Following")))))));
  }}

React.render( React.createElement(App, null), document.body);