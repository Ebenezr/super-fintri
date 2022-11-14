import Link from "next/link";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ApiIcon from "@mui/icons-material/Api";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AlbumIcon from "@mui/icons-material/Album";

const Aside = () => {
  return (
    <aside className="bg-bg w-1/3 p-4 flex flex-col">
      {/* logo */}
      <div className="pb-6 flex gap-2 items-center">
        <AlbumIcon className="text-primary" />
        <h2 className="text-primary font-semibold"> Super Finti</h2>
      </div>
      {/* main nav */}
      <div className="mb-6">
        <h2 className="text-infoDark font-semibold">Main Navigation</h2>
        {/* links */}
        <div className="flex flex-col px-2 mt-3">
          <Link href="/dashboard" className={navLink}>
            <DashboardIcon />
            DashBoard
          </Link>
          <Link href="/transactions" className={navLink}>
            <CenterFocusStrongIcon />
            Transactions
          </Link>
          <Link href="/contacts" className={navLink}>
            <ApiIcon />
            Contacts
          </Link>
          <Link href="/features" className={navLink}>
            <DisplaySettingsIcon />
            Features
          </Link>
          <Link href="/library" className={navLink}>
            <AutoAwesomeMotionIcon />
            Library
          </Link>
        </div>
      </div>
      {/* settings */}
      <div className="mb-6 flex-1">
        <h2 className="text-infoDark font-semibold"> Settings & Schedules</h2>
        {/* links */}
        <div className="flex flex-col  px-2 mt-3">
          <Link href="/dashboard" className={navLink}>
            <AccountBalanceWalletIcon />
            Base Wallet
          </Link>
          <Link href="/transactions" className={navLink}>
            <FolderSharedIcon />
            My Contacts
          </Link>
          <Link href="/contacts" className={navLink}>
            <ReceiptIcon />
            Invoices
          </Link>
          <Link href="/features" className={navLink}>
            <AccountTreeIcon />
            Schedules
          </Link>
        </div>
      </div>
      {/* help center card */}
      <div className="w-full rounded-xl p-4 flex flex-col gap-3 justify-center items-center bg-infoDark/5 relative justify-self-end">
        {/* question circle badge */}
        <div className="drop-shadow-xl absolute top-0 bg-white rounded-full w-12 h-12 -translate-y-1/2 grid place-items-center">
          <div className="bg-accent w-3/5 h-3/5 rounded-full grid place-items-center">
            <p className="font-bold text-white text-lg">?</p>
          </div>
        </div>

        <h3 className="mt-4">Help Center</h3>
        <p className="text-center">
          Having trouble in Finti. Please contact us for more questions
        </p>
        <button className="bg-white text-gray-700 rounded-lg px-3 py-1 font-semibold text-sm shadow-lg">
          Go To Help Center
        </button>
      </div>
    </aside>
  );
};

export default Aside;

const navLink = "text-info py-2 flex items-center gap-2 ";
