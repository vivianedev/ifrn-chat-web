import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import { AppButton } from "../src/components";

const AppNavBar = (props) => {
   return (
      <AppBar position="static">
         <Toolbar>
            <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="menu"
               sx={{ mr: 2 }}
            >
               <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               {props.title}
            </Typography>
            <AppButton color="inherit" label="Login" href="/login" />
            <AppButton color="inherit" label="Logout" href="/logout" />         
				 </Toolbar>
      </AppBar>
   );
};

export default function Home() {
   return (
      <div>
         <Head>
            <title>Chat de Infoweb</title>
            <meta name="description" content="Chat do curso de Infoweb" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <AppNavBar
               title="Chat de Infoweb"
            />
            <h1>Landing page do chat de Infoweb</h1>
         </main>
      </div>
   );
}