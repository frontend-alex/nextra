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
import { ShieldMinus, Trash } from "lucide-react";
import useTranslation from "@hooks/useTranslation";
import { DialogClose } from "@radix-ui/react-dialog";

const AccountModals = () => {
  const { t } = useTranslation();

  const DisableAccountModal = () => {
    return (
      <Dialog>
        <DialogTrigger>
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
        <DialogTrigger>
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

  return { DisableAccountModal, DeleteAccountModal };
};

export default AccountModals;
