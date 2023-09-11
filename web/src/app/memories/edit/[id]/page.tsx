import { Memory } from "@/app/types";
import { EditMemoryForm } from "@/components/EditMemoryForm";
import { EmptyMemory } from "@/components/EmptyMemory";
import { api } from "@/lib/api";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { cookies } from "next/headers";

dayjs.locale(ptBr);

interface MemoryProps {
  params: {
    id: string;
  };
}

export default async function EditMemory({ params }: MemoryProps) {
  const id = params.id;
  const isAuthenticated = cookies().has("token");
  if (!isAuthenticated) {
    return <EmptyMemory />;
  }

  const token = cookies().get("token")?.value;
  const response = await api.get(`/memories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const memory: Memory = response.data;
  if (memory) {
    return (
      <div className="flex flex-col gap-10 p-8">
        <EditMemoryForm memoryId={memory.id} />
      </div>
    );
  }
}
