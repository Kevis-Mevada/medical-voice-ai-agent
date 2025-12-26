"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);
  return (
    <div>
      {historyList.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 mt-10 p-7 border border-dashed border-neutral-300 rounded-lg">
          <Image
            src={"/medical-assistance.png"}
            alt="No History Available"
            width={150}
            height={150}
          />
          <h2 className="font-bold text-2xl">No Recent Consultation</h2>
          <p>it's look like you haven't had any consultations yet.</p>
          <Button className="mt-3">+ Start a Consultation</Button>
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
}

export default HistoryList;
