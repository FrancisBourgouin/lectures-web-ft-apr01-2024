const SomeComponent = function(props){
  const [user,setUser] = useState(null)

  authenticate(email, password)
  authenticate(1)
}


app.post("/api/authenticate", (req, res) => {
  const userId = req.body.userId

  res.cookie("userId", userId)
  res.json(users[userId])
})



const ProfileCard = (props) => {
  ...
}


<ProfileCard />
