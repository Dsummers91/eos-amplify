#include <eosiolib/eosio.hpp>


using namespace eosio;


CONTRACT amplify : public contract {
  //private:
    public: //just gonna make everything public for now
    using contract::contract;
    amplify( eosio::name receiver, eosio::name code, eosio::datastream<const char*> ds ): eosio::contract(receiver, code, ds),  
      _proposal(receiver, code.value), 
      _users(receiver, code.value)
    {}

    TABLE proposal {
      uint64_t      prim_key;  // primary key
      std::string name; // name of the proposal
      uint128_t users;  // number of users
      auto primary_key() const { return prim_key; }

    };
    
    typedef eosio::multi_index<"proposal"_n, proposal> proposaltable;

    proposaltable _proposal;

    TABLE user {
      uint64_t      prim_key;  // primary key
      bool active; //whether user is active or not
      uint128_t proposal_id; //id of proposal
      uint128_t stake; // amount of tokens staked
      
      auto primary_key() const { return prim_key; }

      //index will be multiindex of user/proposalid
    };

    typedef eosio::multi_index<"users"_n, user> usertable;
    usertable _users;


    ACTION stake(name user) { 
      require_auth(user);
      eosio::print("CALLED");
    }
};

EOSIO_DISPATCH( amplify, (stake) )
