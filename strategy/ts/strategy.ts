interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy!: Strategy;

  constructor(strategy: Strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Go to database');
    if (user === 'admin' && password === 'go') {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Go to auth service!');
    if (user === 'admin' && password === 'go') {
      return true;
    }
    return false;
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Go to GOOGLE to auth');
    if (user === 'admin' && password === 'go') {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
let res = auth.login('admin', 'go');
console.log(res)

auth.setStrategy(new LoginServiceStrategy());
res = auth.login('admin', 'goes');
console.log(res)

auth.setStrategy(new LoginGoogleStrategy());
res = auth.login('admin', 'go');
console.log(res)