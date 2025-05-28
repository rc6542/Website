function Navbar() {
  return (
    <div class="flex border-b-1 border-y-purple-300/70 justify-between items-center p-4 bg-gradient-to-r from-purple-950/50 to-purple-1000 sticky top-0 z-50 backdrop-blur-md"> 
        <a href='App.jsx' class="font-normal text-3xl text-center pl-10 hover:underline"> 
            Ryan Chen 
        </a>
        <div class="flex items-center">
            <a href='App.jsx' class="font-normal text-2xl text-center hover:underline">
                About
            </a>
            <a href='App.jsx' class="font-normal text-2xl text-center pl-10 pr-10 hover:underline">
                Contact
            </a>
        </div>
    </div>
  );
}

export default Navbar;
