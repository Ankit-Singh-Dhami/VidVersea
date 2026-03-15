"use client";

import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

interface CustomLoadingProps {
  loading: boolean;
}

const CustomLoading = ({ loading }: CustomLoadingProps) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="flex flex-col items-center justify-center gap-4 text-center">
        <Image
          src="/loading.gif"
          alt="Loading"
          width={180}
          height={180}
          priority
        />

        <AlertDialogHeader className="flex flex-col items-center justify-center gap-4 text-center">
          <AlertDialogTitle>Generating Video Script</AlertDialogTitle>
          <AlertDialogDescription>
            Please wait while AI creates your video scenes...
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
