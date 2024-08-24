import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  Dialog,
  DialogTrigger,
  DialogFooter,
} from "../dialog";
import { Button } from "../button";
import { ShieldMinus, SquarePen, Trash } from "lucide-react";
import useTranslation from "@hooks/useTranslation";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTheme } from "next-themes";

const AccountModals = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const DisableAccountModal = () => {
    return (
      <Dialog>
        <DialogTrigger className="shadcn-icon-button">
          <Button variant="destructive" className="shadcn-icon-button">
            <ShieldMinus size={15} />
            {t("disableAccount")}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Disable Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to disable your account
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="r-flex-3">
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Disable</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  const DeleteAccountModal = () => {
    return (
      <Dialog>
        <DialogTrigger className="shadcn-icon-button">
          <Button
            variant="outline"
            className="shadcn-icon-button text-red-600/50 hover:text-red-600"
          >
            <Trash size={15} />
            {t("deleteAccount")}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="r-flex-3">
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Delete</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  const ChangePasswordModal = () => {
    return (
      <Dialog>
        <DialogTrigger className="shadcn-icon-button">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            className="shadcn-icon-button"
          >
            <SquarePen size={15} />
            {t("changePassword")}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Are you sure you want to change your Password
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 select-none">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                id="name"
                defaultValue="Pedro Duarte"
                className="input col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="username" className="text-right">
                Username
              </label>
              <input
                id="username"
                defaultValue="@peduarte"
                className="input col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <div className="r-flex-3">
              <DialogClose asChild>
                <Button>Cancel</Button>
              </DialogClose>
              <Button variant="outline">Save Changes</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return { DisableAccountModal, DeleteAccountModal, ChangePasswordModal };
};

export default AccountModals;
