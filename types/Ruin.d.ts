/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface RuinInterface extends ethers.utils.Interface {
  functions: {
    "ADMIN_ROLE()": FunctionFragment;
    "BURNER_ROLE()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "cap()": FunctionFragment;
    "decimals()": FunctionFragment;
    "getAdminRole()": FunctionFragment;
    "grantRole(address,bytes32)": FunctionFragment;
    "hasRole(address,bytes32)": FunctionFragment;
    "isBurner(address)": FunctionFragment;
    "isMinter(address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceRole(address,bytes32)": FunctionFragment;
    "revokeRole(address,bytes32)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BURNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cap", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAdminRole",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isBurner", values: [string]): string;
  encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BURNER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAdminRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isBurner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "GrantRole(address,bytes32)": EventFragment;
    "Paused(address)": EventFragment;
    "RenounceRole(address,bytes32)": EventFragment;
    "RevokeRole(address,bytes32)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "UnPaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GrantRole"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RenounceRole"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeRole"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnPaused"): EventFragment;
}

export class Ruin extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RuinInterface;

  functions: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "ADMIN_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "BURNER_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cap(overrides?: CallOverrides): Promise<[BigNumber]>;

    "cap()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    getAdminRole(overrides?: CallOverrides): Promise<[string]>;

    "getAdminRole()"(overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grantRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    hasRole(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasRole(address,bytes32)"(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBurner(_account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isBurner(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMinter(_account: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isMinter(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    pause(overrides?: Overrides): Promise<ContractTransaction>;

    "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    renounceRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "renounceRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revokeRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revokeRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unpause(overrides?: Overrides): Promise<ContractTransaction>;

    "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  BURNER_ROLE(overrides?: CallOverrides): Promise<string>;

  "BURNER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  "MINTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cap(overrides?: CallOverrides): Promise<BigNumber>;

  "cap()"(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  getAdminRole(overrides?: CallOverrides): Promise<string>;

  "getAdminRole()"(overrides?: CallOverrides): Promise<string>;

  grantRole(
    _account: string,
    _role: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grantRole(address,bytes32)"(
    _account: string,
    _role: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  hasRole(
    _address: string,
    _role: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(address,bytes32)"(
    _address: string,
    _role: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBurner(_account: string, overrides?: CallOverrides): Promise<boolean>;

  "isBurner(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMinter(_account: string, overrides?: CallOverrides): Promise<boolean>;

  "isMinter(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  pause(overrides?: Overrides): Promise<ContractTransaction>;

  "pause()"(overrides?: Overrides): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  renounceRole(
    _account: string,
    _role: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "renounceRole(address,bytes32)"(
    _account: string,
    _role: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revokeRole(
    _account: string,
    _role: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revokeRole(address,bytes32)"(
    _account: string,
    _role: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unpause(overrides?: Overrides): Promise<ContractTransaction>;

  "unpause()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<string>;

    "BURNER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cap(overrides?: CallOverrides): Promise<BigNumber>;

    "cap()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    getAdminRole(overrides?: CallOverrides): Promise<string>;

    "getAdminRole()"(overrides?: CallOverrides): Promise<string>;

    grantRole(
      _account: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(address,bytes32)"(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBurner(_account: string, overrides?: CallOverrides): Promise<boolean>;

    "isBurner(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMinter(_account: string, overrides?: CallOverrides): Promise<boolean>;

    "isMinter(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    "pause()"(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    renounceRole(
      _account: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      _account: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;

    "unpause()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    GrantRole(account: null, role: null): EventFilter;

    Paused(account: null): EventFilter;

    RenounceRole(account: null, role: null): EventFilter;

    RevokeRole(account: null, role: null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    UnPaused(account: null): EventFilter;
  };

  estimateGas: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "BURNER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cap(overrides?: CallOverrides): Promise<BigNumber>;

    "cap()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAdminRole(overrides?: CallOverrides): Promise<BigNumber>;

    "getAdminRole()"(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "grantRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    hasRole(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(address,bytes32)"(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBurner(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isBurner(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMinter(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isMinter(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides): Promise<BigNumber>;

    "pause()"(overrides?: Overrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "renounceRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    revokeRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "revokeRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unpause(overrides?: Overrides): Promise<BigNumber>;

    "unpause()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ADMIN_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BURNER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BURNER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MINTER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAdminRole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAdminRole()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grantRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    hasRole(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(address,bytes32)"(
      _address: string,
      _role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBurner(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBurner(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMinter(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isMinter(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pause()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "renounceRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revokeRole(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revokeRole(address,bytes32)"(
      _account: string,
      _role: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unpause()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
