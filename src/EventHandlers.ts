/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  MetaMorpho,
  MetaMorpho_AccrueInterest,
  MetaMorpho_Approval,
  MetaMorpho_Deposit,
  MetaMorpho_EIP712DomainChanged,
  MetaMorpho_OwnershipTransferStarted,
  MetaMorpho_OwnershipTransferred,
  MetaMorpho_ReallocateSupply,
  MetaMorpho_ReallocateWithdraw,
  MetaMorpho_RevokePendingCap,
  MetaMorpho_RevokePendingGuardian,
  MetaMorpho_RevokePendingMarketRemoval,
  MetaMorpho_RevokePendingTimelock,
  MetaMorpho_SetCap,
  MetaMorpho_SetCurator,
  MetaMorpho_SetFee,
  MetaMorpho_SetFeeRecipient,
  MetaMorpho_SetGuardian,
  MetaMorpho_SetIsAllocator,
  MetaMorpho_SetSkimRecipient,
  MetaMorpho_SetSupplyQueue,
  MetaMorpho_SetTimelock,
  MetaMorpho_SetWithdrawQueue,
  MetaMorpho_Skim,
  MetaMorpho_SubmitCap,
  MetaMorpho_SubmitGuardian,
  MetaMorpho_SubmitMarketRemoval,
  MetaMorpho_SubmitTimelock,
  MetaMorpho_Transfer,
  MetaMorpho_UpdateLastTotalAssets,
  MetaMorpho_Withdraw,
} from "generated";

MetaMorpho.AccrueInterest.handler(async ({ event, context }) => {
  const entity: MetaMorpho_AccrueInterest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newTotalAssets: event.params.newTotalAssets,
    feeShares: event.params.feeShares,
  };

  context.MetaMorpho_AccrueInterest.set(entity);
});

MetaMorpho.Approval.handler(async ({ event, context }) => {
  const entity: MetaMorpho_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.MetaMorpho_Approval.set(entity);
});

MetaMorpho.Deposit.handler(async ({ event, context }) => {
  const entity: MetaMorpho_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.MetaMorpho_Deposit.set(entity);
});

MetaMorpho.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: MetaMorpho_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.MetaMorpho_EIP712DomainChanged.set(entity);
});

MetaMorpho.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: MetaMorpho_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.MetaMorpho_OwnershipTransferStarted.set(entity);
});

MetaMorpho.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: MetaMorpho_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.MetaMorpho_OwnershipTransferred.set(entity);
});

MetaMorpho.ReallocateSupply.handler(async ({ event, context }) => {
  const entity: MetaMorpho_ReallocateSupply = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
    suppliedAssets: event.params.suppliedAssets,
    suppliedShares: event.params.suppliedShares,
  };

  context.MetaMorpho_ReallocateSupply.set(entity);
});

MetaMorpho.ReallocateWithdraw.handler(async ({ event, context }) => {
  const entity: MetaMorpho_ReallocateWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
    withdrawnAssets: event.params.withdrawnAssets,
    withdrawnShares: event.params.withdrawnShares,
  };

  context.MetaMorpho_ReallocateWithdraw.set(entity);
});

MetaMorpho.RevokePendingCap.handler(async ({ event, context }) => {
  const entity: MetaMorpho_RevokePendingCap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
  };

  context.MetaMorpho_RevokePendingCap.set(entity);
});

MetaMorpho.RevokePendingGuardian.handler(async ({ event, context }) => {
  const entity: MetaMorpho_RevokePendingGuardian = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
  };

  context.MetaMorpho_RevokePendingGuardian.set(entity);
});

MetaMorpho.RevokePendingMarketRemoval.handler(async ({ event, context }) => {
  const entity: MetaMorpho_RevokePendingMarketRemoval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
  };

  context.MetaMorpho_RevokePendingMarketRemoval.set(entity);
});

MetaMorpho.RevokePendingTimelock.handler(async ({ event, context }) => {
  const entity: MetaMorpho_RevokePendingTimelock = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
  };

  context.MetaMorpho_RevokePendingTimelock.set(entity);
});

MetaMorpho.SetCap.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetCap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
    cap: event.params.cap,
  };

  context.MetaMorpho_SetCap.set(entity);
});

MetaMorpho.SetCurator.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetCurator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newCurator: event.params.newCurator,
  };

  context.MetaMorpho_SetCurator.set(entity);
});

MetaMorpho.SetFee.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetFee = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    newFee: event.params.newFee,
  };

  context.MetaMorpho_SetFee.set(entity);
});

MetaMorpho.SetFeeRecipient.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetFeeRecipient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newFeeRecipient: event.params.newFeeRecipient,
  };

  context.MetaMorpho_SetFeeRecipient.set(entity);
});

MetaMorpho.SetGuardian.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetGuardian = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    guardian: event.params.guardian,
  };

  context.MetaMorpho_SetGuardian.set(entity);
});

MetaMorpho.SetIsAllocator.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetIsAllocator = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    allocator: event.params.allocator,
    isAllocator: event.params.isAllocator,
  };

  context.MetaMorpho_SetIsAllocator.set(entity);
});

MetaMorpho.SetSkimRecipient.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetSkimRecipient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newSkimRecipient: event.params.newSkimRecipient,
  };

  context.MetaMorpho_SetSkimRecipient.set(entity);
});

MetaMorpho.SetSupplyQueue.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetSupplyQueue = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    newSupplyQueue: event.params.newSupplyQueue,
  };

  context.MetaMorpho_SetSupplyQueue.set(entity);
});

MetaMorpho.SetTimelock.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetTimelock = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    newTimelock: event.params.newTimelock,
  };

  context.MetaMorpho_SetTimelock.set(entity);
});

MetaMorpho.SetWithdrawQueue.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SetWithdrawQueue = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    newWithdrawQueue: event.params.newWithdrawQueue,
  };

  context.MetaMorpho_SetWithdrawQueue.set(entity);
});

MetaMorpho.Skim.handler(async ({ event, context }) => {
  const entity: MetaMorpho_Skim = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    token: event.params.token,
    amount: event.params.amount,
  };

  context.MetaMorpho_Skim.set(entity);
});

MetaMorpho.SubmitCap.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SubmitCap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
    cap: event.params.cap,
  };

  context.MetaMorpho_SubmitCap.set(entity);
});

MetaMorpho.SubmitGuardian.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SubmitGuardian = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newGuardian: event.params.newGuardian,
  };

  context.MetaMorpho_SubmitGuardian.set(entity);
});

MetaMorpho.SubmitMarketRemoval.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SubmitMarketRemoval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    event_id: event.params.id,
  };

  context.MetaMorpho_SubmitMarketRemoval.set(entity);
});

MetaMorpho.SubmitTimelock.handler(async ({ event, context }) => {
  const entity: MetaMorpho_SubmitTimelock = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newTimelock: event.params.newTimelock,
  };

  context.MetaMorpho_SubmitTimelock.set(entity);
});

MetaMorpho.Transfer.handler(async ({ event, context }) => {
  const entity: MetaMorpho_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.MetaMorpho_Transfer.set(entity);
});

MetaMorpho.UpdateLastTotalAssets.handler(async ({ event, context }) => {
  const entity: MetaMorpho_UpdateLastTotalAssets = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    updatedTotalAssets: event.params.updatedTotalAssets,
  };

  context.MetaMorpho_UpdateLastTotalAssets.set(entity);
});

MetaMorpho.Withdraw.handler(async ({ event, context }) => {
  const entity: MetaMorpho_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.MetaMorpho_Withdraw.set(entity);
});
