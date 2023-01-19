<template>
    <div>
        <nav class="navbar">
            <div class="nav-container">
                <img class="logo" alt='logo' src= {Logo}/>
                <a href="google.com">Product</a>
                <a href="google.com">Features</a>
                <a href="google.com">Marketplace</a>
                <a href="google.com">Company</a>
                <button type="button" class="login">Log in</button>
            </div>
        </nav>
    </div>

</template>

<style>
body{
    background-color: #1f2937;
}
.logo{
    width:55px;
    margin: 5px;
    padding-top: 2px;
    padding-left: 15px;
    display: inline-block;
}
.nav-container a{
    display: inline-block;
    vertical-align: center;
    width: auto;
    color: white;
    font-size: 20px;
    padding: 2px;
    padding-left: 10px;
    text-decoration: none;
    margin: 18px;
    font-family: 'Poppins', sans-serif;
}
.navbar{
	position: fixed;
    z-index: 3;
	top: 0;
    padding: 0;
    width: 100%;
    height: auto;
}
.nav-container{
    max-width: 1920px;
    height: 69px;
    margin: 0 auto;
    background-color: #1f2937;
}
.login{
    width: auto;
    height: 40px;
    font-size: 20px;
    color: white;
    right: 0;
    float: right;
    border-style: none;
    border-radius: 5px;
    margin: 15px;
    padding: 1px;
    padding-left: 17px;
    padding-right: 17px;
    vertical-align: center;
    background-color: #4b5563;
}   
</style>