// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberRequest as _randomPackage_NumberRequest, NumberRequest__Output as _randomPackage_NumberRequest__Output } from '../randomPackage/NumberRequest';
import type { NumberResponse as _randomPackage_NumberResponse, NumberResponse__Output as _randomPackage_NumberResponse__Output } from '../randomPackage/NumberResponse';
import type { PingRequest as _randomPackage_PingRequest, PingRequest__Output as _randomPackage_PingRequest__Output } from '../randomPackage/PingRequest';
import type { PongResponse as _randomPackage_PongResponse, PongResponse__Output as _randomPackage_PongResponse__Output } from '../randomPackage/PongResponse';

export interface RandomClient extends grpc.Client {
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  PingPong(argument: _randomPackage_PingRequest, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  pingPong(argument: _randomPackage_PingRequest, callback: (error?: grpc.ServiceError, result?: _randomPackage_PongResponse__Output) => void): grpc.ClientUnaryCall;
  
  RandomNUmbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  RandomNUmbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNUmbers(argument: _randomPackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  randomNUmbers(argument: _randomPackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_NumberResponse__Output>;
  
}

export interface RandomHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_randomPackage_PingRequest__Output, _randomPackage_PongResponse>;
  
  RandomNUmbers: grpc.handleServerStreamingCall<_randomPackage_NumberRequest__Output, _randomPackage_NumberResponse>;
  
}

export interface RandomDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_randomPackage_PingRequest, _randomPackage_PongResponse, _randomPackage_PingRequest__Output, _randomPackage_PongResponse__Output>
  RandomNUmbers: MethodDefinition<_randomPackage_NumberRequest, _randomPackage_NumberResponse, _randomPackage_NumberRequest__Output, _randomPackage_NumberResponse__Output>
}
