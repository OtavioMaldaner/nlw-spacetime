import { EmptyMemory } from "@/components/EmptyMemory";
import { api } from "@/lib/api";
import { getUser } from "@/lib/auth";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { cookies } from "next/headers";
import Image from "next/image";

dayjs.locale(ptBr);

interface MemoryProps {
  params: {
    id: string;
  };
}

interface Memory {
  id: string;
  coverUrl: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
  userId: string;
}

export default async function ViewMemory({ params }: MemoryProps) {
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
        <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memory.createdAt).format("D[ de ]MMMM[, ]YYYY")}
        </time>
        <Image
          src={memory.coverUrl}
          alt=""
          width={592}
          height={280}
          quality={100}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
        {getUser().sub === memory.userId && <div>Editar</div>}
      </div>
    );
  }
}
