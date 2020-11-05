import App from "../app/app";

export default App;
//
//   console.log(`User is \n`, user);
//   if (user) return <Redirect to={"/app"}></Redirect>;
//   // const [user, setUser] = useState();
//   // useEffect(() => {
//   //   netlifyIdentity.init({});
//   // });
//   // netlifyIdentity.on("login", (user) => {
//   //   netlifyIdentity.close();
//   //   setUser(user);
//   // });
//   // netlifyIdentity.on("logout", () => setUser());
//   return (
//     <Container>
//       <Flex as="nav">
//         <NavLink as={Link} to="/" p={2}>
//           Home
//         </NavLink>
//         <NavLink as={Link} to={"/app"} p={2}>
//           Dashboard
//         </NavLink>
//         {user && (
//           <NavLink href="#!" p={2}>
//             {user.user_metadata.full_name}
//           </NavLink>
//         )}
//       </Flex>
//       <Flex sx={{ flexDirection: "column", padding: 3 }}>
//
//         <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>
//           Log In
//         </Button>
//       </Flex>
//     </Container>
//   );
