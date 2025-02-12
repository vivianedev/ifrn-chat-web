import React, { useState } from "react";

import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Head from "next/head";
import { useRouter } from "next/router";

import { AppButton } from "../src/components";

const AppLoginLogoutButton = (props) => {
   if (props.login) {
      return <AppButton color="inherit" label="Login" href="/login" />;
   } else {
      return (
         <AppButton
            color="inherit"
            label="logout"
            onClick={(e) => props.onLogout(e)}
         />
      );
   }
};

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
            <AppLoginLogoutButton
               login={!props.userLogged}
               onLogout={props.logoutFunction}
            />
         </Toolbar>
      </AppBar>
   );
};

export default function Home() {
   const router = useRouter();
   const [sessionId, setSessionId] = useState(router.query.hash ?? "");
   const isUserLogged = () => (sessionId ? true : false);

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
               userLogged={isUserLogged()}
               logoutFunction={(e) => setSessionId("")}
            />
            <h1>Landing page do chat de Infoweb</h1>
         </main>
      </div>
   );
}