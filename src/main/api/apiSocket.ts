import { io, Socket } from "socket.io-client";
import { ApiEventMap } from "./ApiEventMap";

export const ioWrapper: (
  opts: Parameters<typeof io>[0]
) => Socket<ApiEventMap> = io;
