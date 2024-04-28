import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return(
      <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold">
        <div>
          相簿
        </div>
  
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }