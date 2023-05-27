import React from "react";
import { Notification, Paragraph } from "Design";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { RenderComponentProps } from "./AlertNotification.types";

const AlertNotification = ({ alert, open, setOpen, router }: RenderComponentProps) => {
  return (
    <>
      {open && (
        <Notification
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Paragraph onClick={() => router.push("/alerts")} textAlign="center" width="100%">
            {alert.sender_name} | {alert.event}
          </Paragraph>
        </Notification>
      )}
    </>
  );
};

export default AlertNotification;
