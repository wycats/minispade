# -*- encoding: utf-8 -*-
require File.expand_path('../lib/minispade/version', __FILE__)

Gem::Specification.new do |s|
  s.add_dependency 'thor', '~> 0.15.2'
  s.authors = ['Yehuda Katz']
  s.description = %q{A javascript wrapper and require implementation}
  s.email = 'ruby-thor@googlegroups.com'
  s.executables = `git ls-files -- bin/*`.split("\n").map{|f| File.basename(f)}
  s.files = `git ls-files`.split("\n")
  s.name = 'minispade'
  s.homepage = 'https://github.com/wycats/minispade'
  s.rdoc_options = ['--charset=UTF-8']
  s.require_paths = ['lib']
  s.required_rubygems_version = Gem::Requirement.new('>= 1.3.6')
  s.summary = s.description
  s.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.version = Minispade::VERSION
end
